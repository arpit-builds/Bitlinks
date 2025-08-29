"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Shorten = () => {
  const [form, setForm] = useState({ url: "", shorturl: "" })
  const [generated, setGenerated] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": form.url,
      "shorturl": form.shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${form.shorturl}`)
        setForm({ url: "", shorturl: "" })
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='background_gradient min-h-[calc(100vh-64px)] pt-16'>
      <div className='mx-auto max-w-lg bg-purple-100 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Generate your short urls</h1>
        <input className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" name='url' placeholder='Enter your URL' value={form.url} onChange={handleChange} />
        <input className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' type="text" name='shorturl' placeholder='Enter your preferred short url text' value={form.shorturl} onChange={handleChange} />
        <button type="button" onClick={generate} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center">Generate</button>
        {generated.length !== 0 && <><span className='font-bold text-lg'>Your links</span><code><Link target='_blank' href={generated}>{generated}</Link></code></>}
      </div>
    </div>
  )
}

export default Shorten
