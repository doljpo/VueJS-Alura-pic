export default class FotoService {

    constructor(resource) {
        this._resource = resource("v1/fotos{/id}");
    }

    listar() {
        return this._resource.query().then(res => res.json());
    }

    cadastrar(foto) {
        return this._resource.save(foto);
    }

    apagar(id) {
        return this._resource.delete({ id });
    }

    buscar(id) {
        return this._resource.get({ id }).then(res => res.json());
    }
}