import { BigHead } from "@bigheads/core";
import './about.styles.scss'

export default function Avatar() {
  return (
    <div className="w-64 cursor-pointer rounded-full">
      <a href='https://github.com/jeffersondrs'>
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="tankTop"
          clothingColor="red"
          eyebrows="raised"
          eyes="happy"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none"
          graphic="react"
          hair="afro"
          hairColor="white"
          hat="none"
          hatColor="red"
          lashes
          lipColor="red"
          mask
          mouth="serious"
          skinTone="light"
        />
      </a>
    </div>
  );
}
