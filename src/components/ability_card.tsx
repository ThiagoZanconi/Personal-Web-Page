import AbilityLabel from "./ability_label"

type AbilityCardProps = {
    name: string,
    skills: string[]
}

function AbilityCard({ name, skills }: AbilityCardProps) {
    return (
        <div className="rounded-md background-b37d7d-color w-full h-full flex flex-col fade-in">
            <h2 className="font-bold text-3xl background-color-black text-center color-b37d7d p-5 rounded-t-md">
                {name}
            </h2>

            <div className="flex flex-wrap gap-3 justify-center items-center flex-1">
                {skills.map((skill, index) => (
                    <AbilityLabel key={index} name={skill} />
                ))}
            </div>
        </div>
    )
}

export default AbilityCard