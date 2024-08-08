from routes.usuarioRoutes import usuario
from routes.motoristaRoutes import motorista
from routes.demandaRoutes import demanda
from routes.caminhaoRoutes import caminhao
from routes.adminRoutes import admin

def default_routes(app):
    usuario(app)
    motorista(app)
    demanda(app)
    caminhao(app)
    admin(app)