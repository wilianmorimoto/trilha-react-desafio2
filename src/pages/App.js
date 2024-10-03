import { useState } from "react"
import gitLogo from "../assets/github.png"
import Input from "../components/Input.js"
import ItemRepo from "../components/ItemRepo.js"
import { SContainer } from "./SApp.js"
import Button from "../components/Button.js"
import { api } from "../services/api"

function App() {
	const [repos, setRepos] = useState([])
	const [currentRepo, setCurrentRepo] = useState("")

	const handleSearchRepo = async () => {
		try {
			const { data } = await api.get(`repos/${currentRepo}`)

			if (data.id) {
				if (repos.find((repo) => repo.id === data.id)) {
					alert("Repositório já adicionado!")
					setCurrentRepo("")
					return
				}

				setRepos((prev) => [...prev, data])
				setCurrentRepo("")
			}
		} catch (error) {
			alert("Repositório não encontrado!")
		}
	}

	const handleRemoveRepo = (id) => {
		setRepos(repos.filter((repo) => repo.id !== id))
	}

	return (
		<SContainer>
			<img src={gitLogo} width={72} height={72} alt="github logo" />
			<Input currentRepo={currentRepo} setCurrentRepo={setCurrentRepo} />
			<Button onClick={handleSearchRepo} />
			{repos.map((repo, i) => (
				<ItemRepo key={i} repo={repo} handleRemoveRepo={handleRemoveRepo} />
			))}
		</SContainer>
	)
}

export default App
