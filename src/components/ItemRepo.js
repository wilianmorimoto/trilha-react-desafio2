import React from "react"
import { SItemContainer } from "./SItemRepo.js"

export default function ItemRepo({ repo, handleRemoveRepo }) {
	return (
		<SItemContainer>
			<h3>{repo.name}</h3>
			<p>{repo.full_name}</p>
			<a href={repo.html_url} target="_blank">
				Ver respositório
			</a>
			<a href="#" className="remover" onClick={() => handleRemoveRepo(repo.id)}>
				Remover
			</a>
			<hr />
		</SItemContainer>
	)
}
