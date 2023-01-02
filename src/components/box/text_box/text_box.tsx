import { Fragment } from 'react'
import { Typography } from '@mui/material'

interface Props {
    variant?: any
    textStyle?: any
    text: string | undefined
    textColor?: any
}

export const TextBox = ({ variant,
    textStyle,
    text, textColor }: Props) => {
    return (
        <Fragment>
            <Typography
                variant={variant}
                sx={{
                    ...textStyle,
                }}
                color={textColor}
            >
                {text}
            </Typography>
        </Fragment>
    )
}