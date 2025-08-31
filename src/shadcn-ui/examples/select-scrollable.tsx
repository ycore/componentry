import React from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/select';

export default function SelectScrollable({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Select>
      <SelectTrigger spriteUrl={spriteUrl} className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent spriteUrl={spriteUrl}>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="est">
            Eastern Standard Time (EST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="cst">
            Central Standard Time (CST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="mst">
            Mountain Standard Time (MST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="pst">
            Pacific Standard Time (PST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="akst">
            Alaska Standard Time (AKST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="hst">
            Hawaii Standard Time (HST)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="gmt">
            Greenwich Mean Time (GMT)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="cet">
            Central European Time (CET)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="eet">
            Eastern European Time (EET)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="cat">
            Central Africa Time (CAT)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="eat">
            East Africa Time (EAT)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="msk">
            Moscow Time (MSK)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="ist">
            India Standard Time (IST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="cst_china">
            China Standard Time (CST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="jst">
            Japan Standard Time (JST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="kst">
            Korea Standard Time (KST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="nzst">
            New Zealand Standard Time (NZST)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="fjt">
            Fiji Time (FJT)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="art">
            Argentina Time (ART)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="bot">
            Bolivia Time (BOT)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="brt">
            Brasilia Time (BRT)
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="clt">
            Chile Standard Time (CLT)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
