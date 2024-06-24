import React, { useState } from 'react'
import Wrapper from '../../common/story/Wrapper'

export const ADD_ROUTE = '/aggiungi'

const typeOptions = ['Parolangelo', 'Slangelo']
const creatorOptions = ['pertosaLorenzo', 'savoGiorgia', 'otherCreator']

interface FormState {
  prefLabel: string;
  pronunciation: string;
  definition: string;
  example: string;
  keyword: string;
  createdDate: string;
}

export const AddConcept: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        prefLabel: '',
        pronunciation: '',
        definition: '',
        example: '',
        keyword: '',
        createdDate: new Date().toISOString().split('T')[0],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { prefLabel, pronunciation, definition, example, keyword, createdDate } = formState
        const turtleString = `
vocang:${prefLabel.toLowerCase().replace(/ /g,'-')}
    a vocang:${selectedType} ;
    skos:prefLabel "${prefLabel}"@it ;
    skos:pronunciation "${pronunciation}"@it ;
    skos:definition "${definition}"@it ;
    skos:example "${example}"@it ;
    schema:keyword "${keyword}" ;
    dct:created "${createdDate}" ;
    dct:creator ${selectedCreators.map(c => `vocang:${c}`).join(', ')} .
    `
        console.log(turtleString)
        alert(turtleString)
    }

    const [selectedType, setSelectedType] = useState<string>(typeOptions[0])

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value)
    }
   
    const [selectedCreators, setSelectedCreators] = useState<string[]>([])
    const [currentCreators, setCurrentCreators] = useState(creatorOptions)

    const handleAddSelect = (selectedValue: string) => {
        setSelectedCreators([...selectedCreators, selectedValue])
        setCurrentCreators(currentCreators.filter(option => option !== selectedValue))
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="select" value={selectedType} onChange={handleTypeChange}>
                        {typeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="prefLabel">Preferred Label:</label>
                    <input
                        type="text"
                        id="prefLabel"
                        name="prefLabel"
                        value={formState.prefLabel}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="pronunciation">Pronunciation:</label>
                    <input
                        type="text"
                        id="pronunciation"
                        name="pronunciation"
                        value={formState.pronunciation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="definition">Definition:</label>
                    <textarea
                        id="definition"
                        name="definition"
                        value={formState.definition}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="example">Example:</label>
                    <textarea
                        id="example"
                        name="example"
                        value={formState.example}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="keyword">Keyword:</label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        value={formState.keyword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="createdDate">Created Date:</label>
                    <input
                        type="date"
                        id="createdDate"
                        name="createdDate"
                        value={formState.createdDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="creators">Creators:</label>
                    {selectedCreators.map((option, index) => (
                        <div key={index}>{option}</div>
                    ))}
                    {currentCreators.length > 0 && (
                        <select onChange={(e) => handleAddSelect(e.target.value)} defaultValue="">
                            <option value="" disabled>Select an option</option>
                            {currentCreators.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    )
}
