import React from 'react';
import { Button } from '../components/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/tooltip';

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
