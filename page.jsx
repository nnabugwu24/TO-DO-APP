"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [theme, setTheme] = useState(false)
  const [outPut, setOutput] = useState("")
  const [checked, setChecked] = useState(true)
  const [tasks, setTasks] = useState([])
  

  useEffect(() => {
    console.log(tasks)
  },[tasks])
  return (
    <div className={`min-h-dvh border h-fit  w-full flex items-center justify-center  ${theme ? "bg-gray-900":"bg-gray-100"} `}
    >
      <Image src={`${theme ?"/bg-desktop-dark.jpg" : "/bg-desktop-light.jpg"}`} width={100} height={20} alt="bg" className="absolute top-0 w-[100%] h-70"/>
      <div className="h-150 w-120 flex flex-col gap-5 relative z-1">
        <div className="flex items-center justify-between p-3">
          <p className="text-3xl text-white">T O D O</p>
          <Image src={`${theme ? "/icon-sun.svg" : "/icon-moon.svg"}`} alt="image" width={20} height={20} className="w-5 h-5"
            onClick={() => {
              setTheme(!theme)
              
            }}
            />
        </div>
        <form className="shadow-lg w-full  h-12 p-2 flex items-center gap-5 *:border bg-amber-50 rounded-sm"
          onSubmit={(e) => {
            e.preventDefault()
            setTasks(prev => [...prev, {title:outPut, completed: false}])

        }}
        >
          <input type="checkbox"
            onInput={(e) => {
              setChecked(e.target.value)
            }} />
          <input type="text" value={outPut} placeholder="Currently typing" className="border-none h-10 flex-1 outline-none " onInput={(e) => {
            setOutput(e.target.value)
          }} />
        </form>
        <div className="h-full bg-amber-400 rounded-sm flex flex-col overflow-y-auto">

          {
            tasks.map((items) => {
              return (
                <div className="flex items-center border-dotted border-b-2 justify-between p-3 rounded-sm bg-amber-50 ">
                  <input type="checkbox" name="" id="" value={items.completed} />
                  <p>{items.title}</p>
                  <Image src={"/icon-cross.svg"} width={20} height={20} className="w-3"
                    onClick={() => {
                      const filtered = tasks.filter(item => items !== item)
                      console.log(filtered)
                      setTasks(filtered)
                  }}
                  />
                  
                </div>
            
             )
            })
          }
        </div>
        <div className="flex w-full justify-between p-2 absolute bottom-0">
          <p><span>5</span> items left</p>
          <div className="flex gap-2 *:hover:scale-120">
            <button className="button" >All</button>
            <button className="button">Active</button>
            <button className="button">Completed</button>
          </div>
          <button className="button">Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
