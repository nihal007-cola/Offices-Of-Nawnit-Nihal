import { useState } from "react"

export default function ONNIndiaDesk() {

const [form,setForm]=useState({
name:"",
company:"",
email:"",
country:"",
requirement:""
})

return (

<div className="bg-[#020617] text-white min-h-screen">

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full"/>
</div>

<section className="relative pt-40 pb-28 px-8">

<div className="max-w-7xl mx-auto">

<div className="inline-flex px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">

ONN INDIA DESK

</div>

<h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05]">

Your Dedicated
<span className="text-cyan-400">
{" "}Operations Desk{" "}
</span>
in India

</h1>

<p className="mt-10 text-white/65 text-lg max-w-4xl">

We become your local face in India.
Factory sourcing.
Vendor verification.
Factory visits.
Quality control.
Logistics coordination.

</p>

<a
href="#contact"
className="inline-block mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black"
>

Schedule Consultation

</a>

</div>

</section>

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-black">

Why Buyers Need India Desk

</h2>

<div className="grid md:grid-cols-2 gap-8 mt-14">

{[
"Factory Verification",
"On Ground Presence",
"Quality Inspection",
"Export Coordination"
].map(item=>(

<div
key={item}
className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8"
>

<div className="text-cyan-400 font-black">

{item}

</div>

</div>

))}

</div>

</div>

</section>

<section
id="contact"
className="px-8 pb-32"
>

<div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-10">

<h2 className="text-5xl font-black">

Ready To Start?

</h2>

<div className="grid md:grid-cols-2 gap-5 mt-10">

<input
placeholder="Name"
className="bg-black/40 rounded-2xl px-5 py-4"
/>

<input
placeholder="Company"
className="bg-black/40 rounded-2xl px-5 py-4"
/>

<input
placeholder="Business Email"
className="bg-black/40 rounded-2xl px-5 py-4"
/>

<input
placeholder="Country"
className="bg-black/40 rounded-2xl px-5 py-4"
/>

</div>

<textarea
rows="5"
placeholder="Requirement"
className="mt-5 w-full bg-black/40 rounded-2xl px-5 py-4"
/>

<button
className="mt-8 bg-cyan-400 text-black px-10 py-5 rounded-2xl font-black"
>

Send Inquiry

</button>

</div>

</section>

</div>

)

}