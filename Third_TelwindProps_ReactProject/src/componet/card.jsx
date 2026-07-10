import React from "react";

function Card(props) {
    console.log("props", props)
    return (
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl">
  {/* Image Section (You can remove this tag if you don't want an image) */}
  <img 
    className="w-full h-48 object-cover rounded-xl mb-4" 
    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809" 
    alt="Card Thumbnail" 
  />

  {/* Card Content */}
  <div>
    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full mb-3">
      Technology
    </span>
    
    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
      React Component Design
    </h2>
    
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      Creating a beautiful and reusable card component is now easier than ever. It fits perfectly into any layout.
    </p>
  </div>

  {/* Card Footer or Action Button */}
  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
        A
      </div>
      <span className="text-xs font-medium text-gray-700">Admin</span>
    </div>
    
    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
      Read More →
    </button>
  </div>
</div>
        </>
    )
}

export default Card