(() => {
    var t = {
            398: (t, e, n) => {
                const { Repository: r } = n(852);
                t.exports = {
                    llenarRepositorioDesdeAPI: function () {
                        const t = new r();
                        $.get("https://students-api.2.us-1.fl0.io/movies", (e) => {
                            e.forEach(
                                ({ title: e, year: n, director: r, duration: s, genre: i, rate: o, poster: a }) => {
                                    t.createFilm(e, n, r, s, i, o, a);
                                }
                            ),
                                n(950).instanciarContendor(t.getAllFilms());
                        });
                    },
                };
            },
            852: (t) => {
                class e {
                    constructor(t, e, n, r, s, i, o) {
                        (this.title = t),
                            (this.year = e),
                            (this.director = n),
                            (this.duration = r),
                            (this.genre = s),
                            (this.rate = i),
                            (this.poster = o);
                    }
                }
                t.exports = {
                    Pelicula: e,
                    Repository: class {
                        constructor() {
                            this.films = [];
                        }
                        getAllFilms() {
                            return this.films;
                        }
                        createFilm(t, n, r, s, i, o, a) {
                            this.films.push(new e(t, n, r, s, i, o, a));
                        }
                    },
                };
            },
            950: (t) => {
                function e(t) {
                    const e = document.getElementById("detallesPelicula");
                    e.innerHTML = "";
                    const { title: n, year: r, director: s, duration: i, genre: o, rate: a, poster: c } = t,
                        l = `\n        <div class="detalleCard">\n            <img src="${c}">\n            <div class="detalleInfo">\n                <h2>${n}</h2>\n                <h3>Año: ${r}</h3>\n                <h3>Director: ${s}</h3>\n                <h3>Duración: ${i}</h3>\n                <h3>Género: ${o}</h3>\n                <h3>Puntuación: ${a}</h3>\n            </div>\n        </div>\n    `;
                    e.innerHTML = l;
                }
                function n(t) {
                    const { title: n, poster: r } = t,
                        s = document.createElement("div");
                    return (
                        s.classList.add("cardCss"),
                        (s.innerHTML = `\n        <img src="${r}">\n        <h2>${n}</h2>\n    `),
                        s.addEventListener("click", () => e(t)),
                        s
                    );
                }
                t.exports = {
                    mostrarDetalles: e,
                    crearTarjeta: n,
                    instanciarContendor: function (t) {
                        const r = document.getElementById("contenedorPeli");
                        t.map(n).forEach((t) => r.appendChild(t)), t.length > 0 && e(t[0]);
                    },
                };
            },
        },
        e = {};
    function n(r) {
        var s = e[r];
        if (void 0 !== s) return s.exports;
        var i = (e[r] = { exports: {} });
        return t[r](i, i.exports, n), i.exports;
    }
    (() => {
        const { llenarRepositorioDesdeAPI: t } = n(398);
        t();
    })();
})();
