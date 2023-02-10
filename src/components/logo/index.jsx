import React from "react"
import { useTheme } from "@emotion/react"

const Logo = ({ fill, height }) => {
  const theme = useTheme()
  console.log("theme:", theme)

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      height={height || "3rem"}
      viewBox="0 0 154 110.21"
      fill={fill || theme.palette.primary.main}
    >
      <path d="M107,1h1c.43,.33,.81,.83,1.3,.98,5.09,1.54,7.41,7.71,4.33,11.85-.74,.99-1.82,1.73-2.66,2.51,1.75,2.25,3.57,3.77,6.08,4.21,3.3,.58,5.29,2.69,6.57,5.59,1.27,2.89,3.36,5.29,4.83,8,1.97,3.63,5.2,5.62,8.29,7.78,1.38,.96,3.34,2.15,5.26,.56,0-.68-.11-1.36,.03-2,.11-.52,.52-.98,.79-1.47,.39,.37,1.05,.7,1.12,1.12,.22,1.32-.12,2.36,1.72,3.36,1.95,1.06,1.5,3.01,.11,5.29-.47,.76-1.01,2-.71,2.63,1.89,3.9,1.85,8.22,2.75,12.31,.77,3.52,1.23,7.05,2.69,10.4,.46,1.05,.19,2.44,.19,3.67,0,.35-.41,.75-.33,1.05,1.13,4.9,2.33,9.79,2.82,14.81,.01,.14,.53,.24,.82,.36v16c-50.33,0-100.67,0-151-.05-.63,0-2.15,1.02-2-.95,.83,0,2.27,.26,2.4-.04,.72-1.67,1.97,.03,3.02-.64,1.07-.69,2.88-.15,4.33-.35,1.22-.17,2.38-.82,3.59-.93,3.36-.31,6.74,.34,10.12-.92,1.75-.66,3.95-.13,5.95-.11,1.72,.01,3.41-2.31,5.15-.06,1.61-1.86,3.79-1,5.59-.84,2.43,.22,4.79-1.34,7.18-.11,.68-1.27,1.92,.12,2.48-.4,1.2-1.13,2.53-.42,3.78-.57,1.15-.14,2.33,.01,3.49-.04,2.57-.11,3.32-1.31,2.62-3.81-.92-3.29-1.95-6.54-2.81-9.85-.59-2.26-.38-5.69-4.5-5.58-.77,.02-1.74-1.2-.79-3.06,1.7-3.34,1.48-7.33,2.39-10.99,.16-.63,.3-1.57-.03-1.95-1.63-1.89-.73-4.08-.93-6.12-.1-.99,.24-2.09-.08-2.98-.51-1.45-1.01,.55-1.78,.05-.04-.32-.2-.79-.15-1.24,.67-5.48-.65-10.43-3.9-14.89-.26-.35-.16-.94-.39-1.33-1.67-2.87-.86-5.61,.7-8.09,1.28-2.03,3.15-3.67,4.5-5.65,1.5-2.21,3.94-2.56,6.08-3.48,2.03-.87,2.44-2.7,2.99-4.49-1.84-2.02-.87-3.94-.2-6.16,.83-2.74,1.64-5.37,2.95-5.29,2.48,.14,5.38-1.27,7.34,1.51,.63,.9,1.73,1.76,1.82,2.72,.3,3.05,0,6.04-2.23,8.54-1.15,1.29-1,1.93,.66,2.07,2.02,.18,2.87,1.56,3.57,2.92,.52,1.02,1.76,1.96,.26,3.77-1.28,1.54,1.34,6.57,3.37,7.32,.79,.29,1.83,.29,2.72-.61,.94-.95,.07-1.18-.21-1.84-.68-1.59-1.29-3.2-1.12-5.06,.13-1.44-.76-3.05-.4-4.36,1.15-4.19,7.21-6.9,10.63-2.4,.1,.13,.24,.23,.35,.36q1.81,2.15,3.48-.01c.26-.34,.45-.78,.79-.99,2.23-1.34,4.75-2.34,5.83-5.02,2.13,0,.49-.8,.5-1.5,.04-1.76-.93-2.99-1.54-4.41-1.64-3.84,.64-8.86,4.63-10.08,.69-.21,1.77,.36,1.79-1.01Zm14,37.43c0,1.91-.32,3.04,.06,3.84,1.84,3.89,2.33,8.01,1.89,12.16-.52,4.95,1.13,9.68,1.07,14.55,0,.28,.22,.57,.33,.86,1.48,3.83,.29,7.8,.63,11.69-1.96,1.77-.6,4.06-.96,6.08-.36,2.02-.84,4.04-.96,6.07-.15,2.51,.62,3.24,3,3.31,1.66,.05,3.32,0,4.99,0h4.99c1.66,0,3.69,.6,4.9-.14,1.73-1.05,2.85,.63,4.25,.15,.58-.2,1.19-.36,1.8-.47,.89-.16,1.82-.44,2.7-.33,1.81,.21,2.63-.36,2.18-1.84-.18-.58-.71-1.07-.82-1.65-.67-3.55-1.18-7.12-1.91-10.66-1.1-5.38-2.16-10.81-2.9-16.22-.66-4.88-2.46-9.58-2.35-14.61,.02-.95-.18-2.73-1.99-3.28-2.04-.63-3.97-1.64-5.94-2.51-1.83-.81-3.66-1.6-5.46-2.47-1.85-.9-3.38-3.24-5.86-1.17-.09,.07-.71-.41-1.02-.7-.72-.69-1.39-1.41-2.61-2.67Zm-30.17,61.89c5.63-.53,10.75-1.01,15.98-1.49,.79-2.8-.15-5.4-1.33-7.75-1.74-3.46-.45-8.14-4.42-10.72-.38-.25-.05-1.59-.05-2.42,0-4.33,0-8.66,0-12.99,0-.93,.34-2.09-1.34-2.02-.2,0-.68-1.05-.61-1.55,.25-1.7-.45-3.11-1.02-4.6-.26-.67,.34-1.84-1.03-1.76-1.68,.1-1.18,1.68-.92,2.24,1.15,2.48,.82,5.05,.94,7.61,.12,2.38-.54,4.81,.89,7.14,.44,.72,.6,2.33-.58,3.15-2.09,1.45-1.85,3.87-1.11,5.35,1.47,2.95,.42,5.66,.7,8.49-1.06,0-1.74-.1-2.38,.03-.54,.11-1.47,.48-1.47,.73,0,3.38-1.75,6.37-2.24,10.55Zm-11.83,.4c0-8.27,0-16.41,0-24.55,0-1.13,.22-2.13-1.56-2.42-.64-.1-.97-2.11-1.44-3.24,1.93-1.06-.33-2.05-.07-3.18,.31-1.37,.07-2.86,.07-4.66-.58,.48-.8,.57-.81,.67-.08,4.97-.19,9.94-.16,14.91,0,1.39-.64,2.96,.78,4.19,.2,.17-.05,1.34-.42,1.61-2.11,1.53-2.72,3.53-2.45,6.03,.08,.69-.67,1.46-.65,2.18,.06,3.28-2.14,6.38-.94,9.98l7.64-1.51Zm38.88-19.37c-1.99-.61-3.96-1.06-5.79-1.84-.83-.36-.93-.44-1.13,.46-.16,.73-.79,1.36-.93,2.08-.46,2.36,.26,11.11,.99,13.47,.71,2.26,2.08,2.91,5.01,2.5,.92-.13,1.88-.02,3.29-.02-.51-5.83-.98-11.27-1.44-16.65Zm-52.59,21.86c.74-.74,1.39-1.09,1.4-1.44,.06-5.53,.05-11.07,.05-16.68h-2.78c.6,5.98-1.14,11.98,1.34,18.12Zm21.71-13.79c-1.34,1.49-2.95,2.5-2.85,3.32,.27,2.39-1.11,4.36-1.15,6.6-.03,1.47,1.36,2.38,2.56,1.53,.73-.52,1.55-1.09,1.49-2.37-.14-2.78-.04-5.57-.04-9.08ZM54.42,48.76l.58,.1c0-2.9,.02-5.8-.03-8.71,0-.39-.3-1-.6-1.1-.35-.12-.92,.12-1.27,.37-1.21,.86-1.39,1.98-.84,3.35,.78,1.97,1.45,3.99,2.17,5.98Zm22.39-7.45c-.29-.29-.58-.74-.99-.93-.23-.11-.86,.09-.97,.32-.37,.81-.65,1.67-.8,2.54-.03,.19,.56,.59,.93,.73,.21,.08,.69-.09,.8-.28,.4-.75,.69-1.56,1.04-2.37Zm19.91-3.45c-.31,.26-.44,.34-.53,.45-.59,.67-1.66,1.16-1,2.33,.11,.2,.54,.35,.81,.33,1.62-.11,.8-1.39,1-2.18,.03-.13-.08-.29-.27-.93Z" />
    </svg>
  )
}

export default Logo