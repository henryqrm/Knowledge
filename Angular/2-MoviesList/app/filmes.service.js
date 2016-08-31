"use strict";
var FilmeService = (function () {
    function FilmeService() {
    }
    FilmeService.prototype.getFilmes = function () {
        return ['Titanic', 'Jurassic Park', 'Avatar',
            'Guerra nas Estrelas'];
    };
    return FilmeService;
}());
exports.FilmeService = FilmeService;
//# sourceMappingURL=filmes.service.js.map