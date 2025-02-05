import React, { useState } from "react";

const ResumeBuilder = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const templates = [
    { 
      id: 1, 
      name: "Template 1", 
      path: "/templates/template1.docx", 
      preview: "/previewImages/template1.png" 
    },
    { 
      id: 2, 
      name: "Template 2", 
      path: "/templates/template2.docx", 
      preview: "/previewImages/template2.png" 
    },
    { 
      id: 3, 
      name: "Template 3", 
      path: "/templates/template3.docx", 
      preview: "/previewImages/template3.png" 
    },
    { 
      id: 4, 
      name: "Template 4", 
      path: "/templates/template4.docx", 
      preview: "/previewImages/template4.png" 
    },
    { 
      id: 5, 
      name: "Template 5", 
      path: "/templates/template5.docx", 
      preview: "/previewImages/template5.png" 
    },
    { 
      id: 6, 
      name: "Template 6", 
      path: "/templates/template6.docx", 
      preview: "/previewImages/template6.png" 
    },
  ];

  return (
    <div className="bg-slate-900 p-10 relative">
      {/* Background Blur and Fullscreen Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4 text-white text-center" style={{ textShadow: '0 0 3px #fff, 0 0 6px #0077ff' }}>Resume Templates</h1>
        <h3 className="text-gray-300 font-bold text-center mb-2">
          Download a professional and ATS-friendly resume templates (Word file),<br/> customize it effortlessly, and shine in your job interviews! Best of luck! 🎉
        </h3>
        <p className="text-gray-400">
          Click on a template image to preview it in full screen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="border p-4 rounded-xl shadow flex flex-col items-center bg-slate-300 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-center">{template.name}</h3>
            <h3 className="text-gray-800 mb-2">Click to Preview:</h3>
            <img 
              src={template.preview} 
              alt={`${template.name} Preview`} 
              className="w-48 h-60 mb-4 border-2 border-slate-500 rounded cursor-pointer hover:shadow-lg"
              onClick={() => setPreviewImage(template.preview)}
            />
            <button
              className="bg-emerald-700 text-white px-10 py-2 text-lg rounded font-medium mt-3"
              onClick={() => {
                const link = document.createElement("a");
                link.href = template.path;
                link.download = `${template.name}.docx`;
                link.click();
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeBuilder;
