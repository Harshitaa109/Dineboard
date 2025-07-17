import React, { useState } from "react";

const MealCard = ({ day, emoji, meal, note, onMealChange, onNoteChange }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-700 text-center text-white">
      <h3 className="text-2xl font-bold text-purple-400 mb-4 tracking-wide flex items-center justify-center gap-2">
        {emoji} <span className="capitalize">{day}</span>
      </h3>

      {image && (
        <img
          src={image}
          alt={`${day} meal`}
          className="w-full h-40 object-cover rounded-xl mb-4 shadow-md border border-gray-600"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 block w-full text-sm text-gray-300 file:mr-4 file:py-1 file:px-3
          file:rounded-lg file:border-0 file:text-sm file:font-semibold
          file:bg-gray-700 file:text-purple-300 hover:file:bg-gray-600"
      />

      <label className="block text-md font-medium text-gray-300 mb-1">What's Cooking?</label>
      <input
        type="text"
        value={meal}
        onChange={(e) => onMealChange(day, e.target.value)}
        placeholder="Enter meal or recipe..."
        className="w-full px-4 py-2 mb-4 border-2 border-purple-400 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-lg text-white shadow-inner"
      />

      <label className="block text-md font-medium text-gray-300 mb-1">Notes</label>
      <textarea
        value={note}
        onChange={(e) => onNoteChange(day, e.target.value)}
        placeholder="Add cooking notes, reminders..."
        rows={3}
        className="w-full px-4 py-2 border-2 border-green-400 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-sm shadow-inner"
      />
    </div>
  );
};

export default MealCard;
