import React from 'react';
import { MdSchool, MdCode, MdCloudQueue } from 'react-icons/md';

export const educationData = [
    {
        institution: "Middle Tennessee State University",
        degree: "Bachelor of Science",
        focus: "Recording Industry Management - Production & Technology",
        date: "Class of 2008",
        icon: MdSchool,
        color: "#3b82f6" // Professional Blue
    },
    {
        institution: "General Assembly",
        degree: "Specialized Certifications",
        focus: "React Development, JavaScript Development, UX Design, Ruby on Rails",
        date: "Post-Graduate",
        icon: MdCode,
        color: "#ef4444" // GA Red
    },
    {
        institution: "Amazon Web Services (AWS)",
        degree: "Cloud Architecture Training",
        focus: "Architecting on AWS & AWSome Day",
        date: "Professional Development",
        icon: MdCloudQueue,
        color: "#f59e0b" // AWS Orange
    }
];