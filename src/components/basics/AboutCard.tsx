import React from 'react';

interface AboutCardProps {
  id: number;
  name: string;
  description1: string;
  description2?: string;
  email?: string;
  image: string;
}

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="text-center">
      <img src={props.image} alt={props.name} style={{ borderRadius: '50%' }} />
      <h2 className="text-lg mt-2">{props.name}</h2>
      <p className="text-sm">{props.description1}</p>
      { props.description2 && <p className="text-sm">{props.description2}</p> }
      { props.email && <p className="text-sm">{props.email}</p> }
    </div>
  );
}