import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim() || ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients, one per line.";
    if (!steps.trim() || steps.split("\n").length < 1)
      newErrors.steps = "Please enter at least one preparation step.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),
      };

      console.log("New Recipe Submitted:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Add New Recipe
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the recipe details below to share it with everyone.
          </p>
        </div>

        <form
          className="bg-white shadow-md rounded-2xl px-8 py-10 space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={4}
              placeholder="e.g. 200g spaghetti"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows={4}
              placeholder="e.g. Boil pasta in salted water"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition duration-300"
          >
            Add Recipe
          </button>
