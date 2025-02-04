import './CapitalInicial.css' ;

function CapitalInicial(){
    return (
        <>
            <section>
                <div className="name">
                    <h1>Capital Inicial</h1>
                </div>
                <div className="group">
                    <img src="/imagesCI/grupo.jpg" alt="Capital Inicial" />
                    <p>Fê Lemos, Dinho Ouro Preto, Yves Passarell e Flávio Lemos, o <b>Capital Inicial</b>, foto tirada por <b>Fernando Hiro</b></p>
                </div>
                <div className="history">
                    <h2>História:</h2>
                    <p>O Capital Inicial é uma das bandas mais emblemáticas do rock brasileiro, tendo sido formado em 1982 na cidade de Brasília. Originalmente, a banda contava com os irmãos Fábio Licks (guitarra) e Flávio Licks (baixo), além do vocalista Dinho Ouro Preto, que se tornou a principal voz do grupo. No início, a banda fazia parte do movimento do rock brasiliense, influenciado por uma mistura de punk rock e new wave, mas foi com o lançamento de seu primeiro álbum, <i>Capital Inicial</i> (1986), que a banda se estabeleceu no cenário musical.</p>
                    <p>Nos anos seguintes, o Capital Inicial se destacou com sua sonoridade energética e letras que exploravam temas como liberdade, juventude e o cotidiano urbano. O álbum <i>Ainda Não Passou</i> (1987) marcou um grande momento na carreira do grupo, com hits como <i>Fátima</i> e <i>Música Urbana</i>. O estilo do Capital Inicial sempre foi marcado por guitarras distorcidas e um som agressivo, conquistando uma legião de fãs que se identificavam com as letras diretas e a atitude irreverente da banda.</p>
                    <p>A trajetória do Capital Inicial, no entanto, não foi isenta de desafios. Durante os anos 1990, a banda passou por algumas mudanças em sua formação e enfrentou momentos de instabilidade. Apesar disso, o grupo continuou a evoluir, lançando álbuns como <i>O Melhor de Mim</i> (1996) e <i>Rádioatividade</i> (2001), consolidando-se como um dos maiores nomes do rock nacional. A boa relação com os fãs e a constante renovação musical permitiram que o Capital Inicial permanecesse relevante, mesmo após décadas de carreira.</p>
                    <p>Em 2005, a banda passou por um momento difícil com a saída do guitarrista Fábio Licks, mas Dinho e os outros membros seguiram em frente, e o Capital Inicial continuou a lançar novos discos e fazer shows pelo Brasil. Hoje, o Capital Inicial segue como um ícone do rock brasileiro, mantendo uma base fiel de fãs e se destacando por sua energia contagiante e por letras que continuam a refletir a realidade e os sentimentos do público.</p>
                    <p>Com uma carreira de mais de 30 anos, o Capital Inicial permanece ativo, sendo uma das bandas mais importantes da história do rock nacional, mantendo a força e a relevância do gênero no Brasil.</p>
                    </div>
                <div className="members">
                    <div className="t-mbrs">
                        <h2>Integrantes:</h2>
                    </div>
                    <div className="p-mbrs">
                        <button className="profile">
                            <img src="/imagesCI/dinho.jpg" alt="Dinho" />
                            <h2>Dinho Ouro Preto</h2>
                            <p>Vocalista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesCI/felemos.jpg" alt="Fe Lemos" />
                            <h2>Fê Lemos</h2>
                            <p>Baterista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesCI/flaviolemos.jpg" alt="Flavio Lemos" />
                            <h2>Flávio Lemos</h2>
                            <p>Baixista</p>
                        </button>
                        <button className="profile">
                            <img src="/imagesCI/yves.jpg" alt="Yves Passarell" />
                            <h2>Yves Passarell</h2>
                            <p>Guitarrista</p>
                        </button>
                    </div>
                </div>
                <div className="albums">
                    <div className="a-top">
                        <h2>Discos:</h2>
                    </div>  
                    <div className="discos">
                        <button className="disco">
                            <img src="/imagesCI/disco1.jpg" alt="Capital Inicial" />
                            <h2>Capital Inicial</h2>
                            <p>1986</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesCI/disco2.jpg" alt="Independência" />
                            <h2>Independência</h2>
                            <p>1987</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesCI/disco3.jpg" alt="Você Não Precisa Entender" />
                            <h2>Você Não Precisa Entender</h2>
                            <p>1988</p>
                        </button>
                        <button className="disco">
                            <img src="/imagesCI/disco4.jpeg" alt="Todos os Lados" />
                            <h2>Todos os Lados</h2>
                            <p>1989</p>
                        </button>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default CapitalInicial;