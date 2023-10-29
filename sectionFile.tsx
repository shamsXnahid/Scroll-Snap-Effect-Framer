import type { ComponentType } from "react"

const style = {
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
}

export const myCodeOverride = (Component): ComponentType => {
    return (props) => {
        return <Component {...props} style={style} />
    }
}
