-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: transportadora
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `demanda`
--

DROP TABLE IF EXISTS `demanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demanda` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `remetente` varchar(50) DEFAULT NULL,
  `enderecoRemetente` varchar(50) DEFAULT NULL,
  `destinatario` varchar(50) DEFAULT NULL,
  `enderecoDestinatario` varchar(50) DEFAULT NULL,
  `carga` varchar(50) DEFAULT NULL,
  `pesoCarga` float(8,2) DEFAULT NULL,
  `volumeCarga` float(8,2) DEFAULT NULL,
  `codcaminhao` int DEFAULT NULL,
  `valor` float(8,2) DEFAULT NULL,
  `codusuario` int DEFAULT NULL,
  `metodoEntrega` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `codcaminhao` (`codcaminhao`),
  CONSTRAINT `demanda_ibfk_1` FOREIGN KEY (`codcaminhao`) REFERENCES `caminhao` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demanda`
--

LOCK TABLES `demanda` WRITE;
/*!40000 ALTER TABLE `demanda` DISABLE KEYS */;
INSERT INTO `demanda` VALUES (1,'merkado','rua isso','satc','rua pascoa','supino',23213.00,214.00,1,1223.00,11,'A'),(3,'shopee','coreia do norte','mariane melo','casa dela','fralda',2.00,NULL,4,10.00,11,'C'),(4,'nba','rua das enterradas 23','belone','rua da casa dele 77','bola de basquete',5.00,30.00,1,130.00,6,'B');
/*!40000 ALTER TABLE `demanda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-17  0:29:59
