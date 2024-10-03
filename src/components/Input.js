import { SInputContainer } from "./SInput.js"

export default function Input({ currentRepo, setCurrentRepo }) {
	return (
		<SInputContainer>
			<input
				type="text"
				value={currentRepo}
				onChange={(e) => setCurrentRepo(e.target.value)}
			/>
		</SInputContainer>
	)
}
