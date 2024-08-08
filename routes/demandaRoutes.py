from controllers.demandaController import demanda_controller

def demanda(app):
    app.route('/demanda', methods=['POST', 'GET', 'PUT', 'DELETE'])(demanda_controller)

