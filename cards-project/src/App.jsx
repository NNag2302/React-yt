import React from 'react'
import Card from './components/card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple Inc.",
    datePosted: "2025-10-15",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$120,000/year",
    location: "Cupertino, California, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2025-10-10",
    post: "Cloud Engineer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$135,000/year",
    location: "Redmond, Washington, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s",
    companyName: "Google",
    datePosted: "2025-10-12",
    post: "Software Engineer Intern",
    tag1: "Part-Time",
    tag2: "Internship",
    pay: "$45/hour",
    location: "Mountain View, California, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "2025-10-18",
    post: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$160,000/year",
    location: "Menlo Park, California, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2025-10-14",
    post: "Data Engineer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$140,000/year",
    location: "Seattle, Washington, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg",
    companyName: "Netflix",
    datePosted: "2025-10-19",
    post: "Machine Learning Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$180,000/year",
    location: "Los Gatos, California, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "2025-10-11",
    post: "Embedded Systems Engineer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$145,000/year",
    location: "Palo Alto, California, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "2025-10-16",
    post: "AI Research Scientist",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$190,000/year",
    location: "Santa Clara, California, USA"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "2025-10-09",
    post: "UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$125,000/year",
    location: "San Jose, California, USA"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
    companyName: "IBM",
    datePosted: "2025-10-13",
    post: "DevOps Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$115,000/year",
    location: "Armonk, New York, USA"
  }
];



  return (
    <div className='parent'>
    {jobOpenings.map(function(elem){

      return <div>
        <Card  company={elem.companyName} logo={elem.brandLogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}/> 
        </div>
    })}
    
    </div>
  )
}

export default App