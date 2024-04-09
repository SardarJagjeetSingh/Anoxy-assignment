"use client"

import { useState } from 'react';

const questions = [
  'Which describes you best?',
  'Which are you most interested in?',
  'You\'re in the right place',
  'What is your math comfort level?',
  'You\'re on your way!',
  'What is your math comfort level?',
];

const options = [
  ['Student or soon to be enrolled', 'Professional pursuing a career', 'Parent of a school-age child', 'Lifelong learner','Teacher','Other'],
  ['Learning specific skills to advance my career', 'Exploring new topics I\'m interested in', 'Refreshing my math foundations', 'Exercising my brain to stay sharp','Something else'],
  ['Brilliant gets you hands-on to help improve your professional skills and knowledge. You\'ll interact with concepts and solve fun problems in math, science, and computer science.'],
  ['Beginner', 'intermidiate', 'Advance', 'Master'],
  ['"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."'],
];

const FormComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [selectedOption, setSelectedOption] = useState(null);

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const getImageUrl = (option) => `https://placeimg.com/100/100/${option.toLowerCase()}`;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for the new question
    } else {
      alert('Thank you! Your answers have been submitted.');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Reset selected option for the previous question
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  return (
<div className="h-full w-full">
  <div className="container mx-auto p-4 h-full w-full">
    <div className="bg-white p-8 rounded shadow-md h-full w-full">
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>

      {/* Display Current Question */}
      <div className="mb-4 text-center">
        <label className="block text-gray-700 text-3xl font-bold mb-2">
          {questions[currentQuestionIndex]}
        </label>
        <div className="flex flex-col items-center">
          {options[currentQuestionIndex].map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center p-2 border rounded mb-2 cursor-pointer ${selectedOption === option ? 'border-blue-500' : ''} w-2/3`}
              onClick={() => handleChange(option)}
            >
              <img src={getImageUrl(option)} alt={option} className="w-8 h-8 mr-2" />
              <div>{option}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Continue' : 'Submit'}
        </button>
      </div>

      {/* Confirmation Message */}
      {currentQuestionIndex === questions.length - 1 && (
        <p className="mt-4 text-center text-green-600 font-semibold">
          Thank you! Your answers have been submitted.
        </p>
      )}
    </div>
  </div>
</div>

  
  );
};

export default FormComponent;
