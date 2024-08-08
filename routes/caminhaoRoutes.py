from controllers.caminhaoController import caminhao_controller

def caminhao(app):
    app.route('/caminhao', methods=['POST', 'GET', 'PUT', 'DELETE'])(caminhao_controller)

