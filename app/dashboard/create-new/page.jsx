"use client"
import React, { useState } from 'react'
import axios from 'axios'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'

function CreateNew() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue
    }));
  };

  const handleCreateVideo = async () => {
    setLoading(true);
    setResult(null);
    try {
      const prompt = `Write a script to generate ${formData.duration || "30 Seconds"} video on topic: ${formData.topic || "your topic"} along with AI image prompt in ${formData.imageStyle || "Realistic"} format for each scene and give me result in JSON format with imagePrompt and ContentText as field`;
      const response = await axios.post('/api/get-video-script', { prompt });
      console.log(response.data.result);
      setResult(response.data.result);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-20 '>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>
      <div className='mt-10 shadow-md p-10'>
        <SelectTopic onUserSelect={onHandleInputChange}/>
        <SelectStyle onUserSelect={onHandleInputChange}/>
        <SelectDuration onUserSelect={onHandleInputChange}/>
        <Button className='mt-10 w-full ' onClick={handleCreateVideo} >Create Short Video</Button>  
        {result && (
          <div className="mt-6">
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreateNew
