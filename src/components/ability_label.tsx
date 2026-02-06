type AbilityLabelProps = {
    name: string
}

function AbilityLabel({ name }: AbilityLabelProps) {
    return (
        <>
            <div className="inline-block background-light-blue-color-hover p-2 m-2">
                <span className="color-white font-medium ">{name}</span>
            </div>
        </>
    )
}

export default AbilityLabel