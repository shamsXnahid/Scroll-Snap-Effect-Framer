import type { ComponentType } from "react"

const style = {
    scrollSnapType: "y mandatory",
}

export const myCodeOverride = (Component): ComponentType => {
    return (props) => {
        return <Component {...props} style={style} />
    }
}
