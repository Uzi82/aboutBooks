import 'libs/styles/bin/BookCreator.scss';
import { useEffect, useRef, useState } from 'react';

import Input from 'libs/UI/Input';
import usePopUp from 'libs/utils/usePopUp';
import useForm  from 'libs/utils/useForm';
import UploadButton from 'libs/modules/UploadButton';
import EditorFormatter from 'libs/modules/EditorFormatter';

interface IBookCreator {
    nameBook: string
}

const genres = [
    "Миф","Ода","Эпос","Драма","Басня","Очерк","Песнь","Поэма","Роман","Былины","Сказка",
    "Эпопея","Элегия","дизайн","Видения","Комедия","Новелла","Повесть","Детектив","Послание",
    "Трагедия","Фольклор","Мелодрама","Эпиграмма","искусство","Комедия нравов","программирование","Научная фантастика","Лирическое стихотворение"
];

function BookCreator() {
    const description = useRef<string>();

    const {register, handleSubmit} = useForm<IBookCreator>();
    const {PopUp, getShowPopUp, getHidePopUp} = usePopUp(false);


    const [urlImage, setImage] = useState<string>();
    const [selectedGenres, setGenre] = useState<string[]>([]);
    const nameBook = useRef<string>("");


    function toSelectGenre(genre: string) {
        const indexOfGenre = selectedGenres.indexOf(genre);

        indexOfGenre === -1
        ? setGenre([...selectedGenres, genre])
        : setGenre((prevSate) => {
            prevSate.splice(indexOfGenre, 1);
            return [...prevSate]
        }); 
    }

    function saveDescription(text: string) {
        description.current = text;
    }

    function getImage(urlImageBase64: string) {
        setImage(urlImageBase64);
    }

    function saveInputValue(text:string) {
        nameBook.current = text;
    }

    async function onSubmit() {
        console.log(nameBook, description, selectedGenres ,urlImage)
    }

    return ( 
        <>
            <PopUp>
                <div className="PopUp-wrapper">
                    <EditorFormatter getDescription={saveDescription}/>
                    <button onClick={getHidePopUp}>сохранить и выйти</button>
                </div>
            </PopUp>

            <div className="BookCreator">
                <div className="BookCreator_left">
                    <div className="BookCreator_left_coverBook">
                        <img src={urlImage} alt="" />
                    </div>
                    <UploadButton cb={getImage} className="BookCreator_left_uploader">
                        загрузить обложку
                    </UploadButton>
                </div>
                <div className="BookCreator_right">
                    <Input onChange={saveInputValue} register={register('nameBook')} label='NameBook'  type="text"/>
                    <div className="BookCreator_right_genres">
                        {
                            genres.map((genre, i) => {
                                const isActive = selectedGenres.includes(genre) ? 'active' : '';
                                return (
                                    <span 
                                        key={i}
                                        onClick={() => toSelectGenre(genre)} 
                                        className={`BookCreator_right_genres_item ${isActive}`}>
                                            {genre}
                                        </span>
                                )
                            })
                        }
                    </div>
                    <div className="BookCreator_right_buttons">
                        <button onClick={getShowPopUp} className='BookCreator_right_buttons_item'>написать описание</button>
                        <button className='BookCreator_right_buttons_item' onClick={handleSubmit(onSubmit)}>добавить книгу</button>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default BookCreator;