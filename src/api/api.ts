import { responseType } from '../../type';

//&species=species&type=type page=1

export function FetchItems({nameInput, genderInput , statusInput, currentPage}: {nameInput: string, genderInput: string , statusInput: string, currentPage: number}): Promise<responseType> {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}${nameInput ? `&name=${nameInput}` : ''}${statusInput ? `&status=${statusInput}` : ''}${genderInput ? `&gender=${genderInput}` : ''}`)
        .then(result => {
            if (result.status === 404) {
                throw new Error('По такому запросу ничего не найдено.')
            }
            if (!result.ok) {
                throw new Error(result.statusText)
            }
            return result.json()
                .then(data => data as responseType)
        })
}