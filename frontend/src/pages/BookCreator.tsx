import 'libs/styles/bin/BookCreator.scss';

import Input from 'libs/UI/Input';
import useForm from 'libs/utils/useForm';

interface IBookCreator {
    nameBook: string
}

const genres = [
    "Драма","Басня","Былины","Видения","Детектив","Комедия",
    "Комедия нравов","Лирическое стихотворение","Мелодрама",
    "Миф","Очерк","Песнь","Научная фантастика", "Новелла", "Повесть",
    "Ода","Поэма","Послание","Сказка","Роман","Трагедия","Фольклор","Эпопея",
    "Элегия","Эпиграмма","Эпос","дизайн","программирование","искусство"
].sort((a,b) => a.length - b.length);

function BookCreator() {
    const {register} = useForm<IBookCreator>();
    return (  
        <div className="BookCreator">
            <div className="BookCreator_left">
                <div className="BookCreator_left_coverBook">
                    <img src="" alt="" />
                </div>
                <button className="BookCreator_left_uploader">
                    upload a cover book
                </button>
            </div>
            <div className="BookCreator_right">
                <Input register={register('nameBook')} label='NameBook'  type="text"/>
                <div className="BookCreator_right_genres">
                    {
                        genres.map((genre, i) => {
                            return <span key={i}>{genre}</span>
                        })
                    }
                </div>
                <div className="BookCreator_right_buttons">
                    <button className='BookCreator_right_buttons_item'>to write description</button>
                    <button className='BookCreator_right_buttons_item'>create post</button>
                </div>
            </div>
        </div>
    );
}

export default BookCreator;