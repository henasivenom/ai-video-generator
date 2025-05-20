"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';


function SelectTopic({ onUserSelect }) {
  const options = [
    'Custom Prompt',
    'Random AI Story',
    'Scary Story',
    'Funny Story',
    'Love Story',
    'Motivational Story',
    'AI Story',
    'AI Video Script',
    'AI Short Video Script',
    'AI Short Video Idea'
  ];
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <h2 className='font-bold text-xl text-primary'>Content </h2>
      <p className='text-gray-500'>What is the Topic of your video</p>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value)
          value != 'Custom Prompt' && onUserSelect('topic', value)
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Content Types" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem
              key={index}
              value={item}
              className="hover:bg-blue-100 cursor-pointer"
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption == 'Custom Prompt' &&
        <Textarea
          className='mt-3'
          onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder='Write your custom prompt here'
        />
      }
    </div>
  )
}

export default SelectTopic
