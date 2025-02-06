import './LegiaoUrbana.css';
import git from '../../assets/githublogo.png';

function LegiaoUrbana() {
    return (
        <>
            <section className='mainS'>
                <div className="name">
                    <h1>Legião Urbana</h1>
                </div>
                <div className="group">
                    <img src="/imagesLU/grupo3.jpg" alt="Legião Urbana" />
                    <p>Dado Villa-Lobos, Renato Rocha, Renato Russo e Marcelo Bonfá, da <b>Legião Urbana</b>, fotografados em 04/12/1986 por <b>Juvenal Pereira</b></p>
                </div>
                <div className="history">
                    <h2>História:</h2>
                    <p>A Legião Urbana surgiu em 1982 na cidade de Brasília/DF. Foi criada pelo vocalista e líder Renato Russo, que decidiu criar a Legião após um desentendimento com os membros de sua banda anterior, o Aborto Elétrico. A banda começou com pequenos shows e apresentações até que em 1985 pode gravar e lançar seu primeiro LP, chamado de <i>"Legião Urbana"</i>, qual fez muito sucesso. Porém, somente em 1986 foi que a banda estourou de vez com o lançamento de seu segundo disco, chamado <i>"Dois"</i>.</p>
                    <p>A Legião Urbana não era apenas uma banda; era uma voz para uma geração. Suas letras profundas e poéticas exploravam temas que iam desde questões sociais e políticas até conflitos emocionais e identidade pessoal. Renato Russo, o líder carismático da banda, era o letrista talentoso por trás dessas palavras que tocavam profundamente os corações dos ouvintes.</p>
                    <p>No entanto, como todas as boas coisas, a jornada da Legião Urbana teve um fim. Após o lançamento do álbum <i>"O Descobrimento do Brasil"</i> em 1993, a banda entrou em hiato indefinido. Renato Russo estava enfrentando problemas de saúde devido ao vírus HIV, que finalmente o levou à morte em 1996.</p>
                </div>
                <div className="members">
                    <div className="t-mbrs">
                        <h2>Integrantes:</h2>
                    </div>
                    <div className="p-mbrs">
                        <button className="profile">
                            <img src="/imagesLU/renatorusso.jpg" alt="Renato Russo" />
                            <h2>Renato Russo</h2>
                            <p>Vocalista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesLU/dado.jpg" alt="Dado Villa Lobos" />
                            <h2>Dado Villa Lobos</h2>
                            <p>Guitarrista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesLU/bonfa.jpg" alt="Marcelo Bonfá" />
                            <h2>Marcelo Bonfá</h2>
                            <p>Baterista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesLU/renatorocha.png" alt="Renato Rocha" />
                            <h2>Renato Rocha</h2>
                            <p>Baixista</p>
                        </button>
                    </div>
                </div>

                <div className="albums">
                    <div className="a-top">
                        <h2>Discos:</h2>
                    </div>  
                    <div className="a-bottom">
                        <button className="disco">
                            <img src="/imagesLU/disco1.jpg" alt="Legião Urbana" />
                            <h2>Legião Urbana</h2>
                            <p>1985</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco2.png" alt="Dois" />
                            <h2>Dois</h2>
                            <p>1986</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco3.jpg" alt="Que País É Este" />
                            <h2>Que País É Este</h2>
                            <p>1987</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco4.jpg" alt="As Quatro Estações" />
                            <h2>As Quatro Estações</h2>
                            <p>1989</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco5.jpg" alt="V" />
                            <h2>V</h2>
                            <p>1991</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco6.jpg" alt="O Descobrimento do Brasil" />
                            <h2>O Descobrimento do Brasil</h2>
                            <p>1993</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesLU/disco7.jpg" alt="A Tempestade" />
                            <h2>A Tempestade</h2>
                            <p>1996</p>
                        </button>
                    </div>
                </div>
            </section>            
        </>
    )
}


export default LegiaoUrbana;