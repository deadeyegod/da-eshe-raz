
import React, { useEffect, useState } from 'react';
import jamesImage from './images/try1.png';
import mariaImage from './images/MariaSave2.jpg';
import anjelaImage from './images/angela.jpg';
import eddieImage from './images/eddie.jpg';

const SilentGame: React.FC = () => {
  const buttonColors: string[] = ["james", "anjela", "maria", "eddie"];
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userClickedPattern, setUserClickedPattern] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const handleButtonClick = (userChosenColor: string) => {
      setUserClickedPattern((prevPattern) => [...prevPattern, userChosenColor]);
      playSound(userChosenColor);
      animatePress(userChosenColor);
      checkAnswer(userClickedPattern.length - 1);
    };

    const handleKeyPress = () => {
      if (!started) {
        setLevel((prevLevel) => prevLevel + 1);
        nextSequence();
        setStarted(true);
      }
    };

    $(".btn").on('click', function () {
      const userChosenColor: string = $(this).attr("id") as string;
      handleButtonClick(userChosenColor);
    });

    $(document).on('keypress', handleKeyPress);

    return () => {
      $(".btn").off('click');
      $(document).off('keypress');
    };
  }, [started, userClickedPattern]);

  useEffect(() => {
    $("#level-title").text("Level " + level);
  }, [level]);

  const nextSequence = () => {
    setUserClickedPattern([]);
    setLevel((prevLevel) => prevLevel + 1);

    const randomNumber: number = Math.floor(Math.random() * 4);
    const randomChosenColor: string = buttonColors[randomNumber];

    setGamePattern((prevPattern) => [...prevPattern, randomChosenColor]);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
  };

  const playSound = (name: string) => {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  };

  const animatePress = (currentColor: string) => {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  };

  const checkAnswer = (level: number) => {
    if (gamePattern[level] === userClickedPattern[level]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      const audio = new Audio("./sounds/wrong.mp3");
      audio.play();

      $('body').addClass("game-over");

      setTimeout(() => {
        $('body').removeClass("game-over");
      }, 200);

      $('h1').text("U lose press key if u dare");
      startOver();
    }
  };

  const startOver = () => {
    setLevel(0);
    setGamePattern([]);
    setStarted(false);
  };

  return (
    <div className="bg-slate-950">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="btn maria bg-cover bg-center" style={{ backgroundImage: `url(${mariaImage})` }}></div>
          <div className="btn james bg-cover bg-center" style={{ backgroundImage: `url(${jamesImage})` }}></div>
          <div className="btn eddie bg-cover bg-center" style={{ backgroundImage: `url(${eddieImage})` }}></div>
          <div className="btn anjela bg-cover bg-center" style={{ backgroundImage: `url(${anjelaImage})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default SilentGame;