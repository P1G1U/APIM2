CREATE TABLE Categoria (
	IdCategoria INTEGER PRIMARY KEY,
	Categoria   VARCHAR(20),
	)
	
CREATE TABLE Users(
	Username VARCHAR(20) PRIMARY KEY,
	Password VARCHAR(20),
	Nome VARCHAR(20),
	Cognome VARCHAR(20),
	DataNascita DATE,
	Mail VARCHAR(30),
	NumeroCarta VARCHAR(20),
	Indirizzo VARCHAR(50),
	Telefono VARCHAR(10),
	Bio VARCHAR(200),
	FotoProfilo VARCHAR(50),
	SaldoCoin DOUBLE,
	IsAdmin BOOLEAN,
	NomeAPI VARCHAR(30)
	FOREIGN KEY(NomeAPI) REFERENCES
			API(NomeAPI)
	)
	
CREATE TABLE API(
	NomeAPI VARCHAR(30) PRIMARY KEY,
	LinkFile VARCHAR(30),
	LinkPdf VARCHAR(30),
	NumeroVoti INTEGER,
	RatingMedio DOUBLE,
	TempoMedioRisposta DOUBLE,
	TotaleChiamate INTEGER,
	Traffico DOUBLE,
	TempoRispostaTotale DOUBLE,
	Username VARCHAR(20),
	IdCategoria INTEGER,
	FOREIGN KEY(Username) REFERENCES
			USERS(Username),
	FOREIGN KEY(IdCategoria) REFERENCES
			CATEGORIA(IdCategoria)
)

CREATE TABLE Commenti (
	IdCommento INTEGER PRIMARY KEY,
	Testo VARCHAR(100),
	Rating INTEGER,
	Username VARCHAR(20),
	NomeAPI VARCHAR(30),
	FOREIGN KEY(Username) REFERENCES
			USERS(USername),
	FOREIGN KEY(NomeAPI) REFERENCES
			API(NomeAPI)
)

CREATE TABLE Key(
	Key VARCHAR(30) PRIMARY KEY,
	DataScadenza DATE,
	MaxByte DOUBLE,
	TempoUso TIME,
	Username VARCHAR(20),
	NomeAPI VARCHAR(30),
	FOREIGN KEY(Username) REFERENCES
			USERS(Username),
	FOREIGN KEY(NomeAPI) REFERENCES
			API(NomeAPI)
)

CREATE TABLE Acquisti(
	IdAcquisto INTEGER PRIMARY KEY
	Username VARCHAR(20),
	Key VARCHAR(30),
	FOREIGN KEY(Username) REFERENCES
			USERS(Username),
	FOREIGN KEY(Key) REFERENCES
			KEY(Key)
)

CREATE TABLE Crea(
	IdMS INTEGER PRIMARY KEY,
	NomeAPI VARCHAR(30),
	Username VARCHAR(20),
	FOREIGN KEY(NomeAPI) REFERENCES
			API(NomeAPI),
	FOREIGN KEY(Username) REFERENCES
			USERS(Username)
)