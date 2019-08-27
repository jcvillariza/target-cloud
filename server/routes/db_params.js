var express = require('express');
var router = express.Router();
var sql_db = require('mssql');
var conn = require('../data/db_execution')();

var routes = function(){
    router.route('/')
        .get(function (req, response) {
            conn.connect()
                .then(() => {
                    var query = `CREATE TABLE dbo.db_params
                    (
                    id int NOT NULL IDENTITY (1, 1),
                    param varchar(50) NOT NULL,
                    value int NULL
                    )  ON [PRIMARY]
                    
                    ALTER TABLE dbo.db_params ADD CONSTRAINT
                    DF_db_params_value DEFAULT 0 FOR param
                    
                    ALTER TABLE dbo.db_params ADD CONSTRAINT
                    PK_db_params PRIMARY KEY CLUSTERED 
                    (
                    id
                    ) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                    ALTER TABLE dbo.db_params SET (LOCK_ESCALATION = TABLE)
                    
                    
                    CREATE TABLE dbo.property
                        (
                        id int NOT NULL IDENTITY (1, 1),
                        name varchar(50) NOT NULL,
                        description varchar(MAX) NULL,
                        datecreated date NOT NULL
                        )  ON [PRIMARY]
                        TEXTIMAGE_ON [PRIMARY]
                    ALTER TABLE dbo.property ADD CONSTRAINT
                        PK_property PRIMARY KEY CLUSTERED 
                        (
                        id
                        ) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                    ALTER TABLE dbo.property SET (LOCK_ESCALATION = TABLE)
                    
                    
                    CREATE TABLE dbo.[user]
                    (
                    id int NOT NULL IDENTITY (1, 1),
                    firstname varchar(50) NOT NULL,
                    middlename varchar(50) NULL,
                    lastname varchar(50) NOT NULL,
                    gender char(1) NULL,
                    dateofbirth date NULL,
                    datecreated date NULL,
                    propertyId int NOT NULL
                    )  ON [PRIMARY]
                ALTER TABLE dbo.[user] ADD CONSTRAINT
                    DF_user_gender DEFAULT 'M' FOR gender
                ALTER TABLE dbo.[user] ADD CONSTRAINT
                    PK_user PRIMARY KEY CLUSTERED 
                    (
                    id
                    ) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
                ALTER TABLE dbo.[user] SET (LOCK_ESCALATION = TABLE)
                
                
                CREATE TABLE dbo.system_credential
                (
                id int NOT NULL IDENTITY (1, 1),
                username varchar(50) NOT NULL,
                password varchar(MAX) NOT NULL,
                active int NULL,
                userId int NOT NULL,
                datecreated date NULL
                )  ON [PRIMARY]
                TEXTIMAGE_ON [PRIMARY]
            ALTER TABLE dbo.system_credential ADD CONSTRAINT
                DF_system_credential_active DEFAULT 0 FOR active
            ALTER TABLE dbo.system_credential ADD CONSTRAINT
                PK_system_credential PRIMARY KEY CLUSTERED 
                (
                id
                ) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
            ALTER TABLE dbo.system_credential SET (LOCK_ESCALATION = TABLE)

            INSERT INTO system_credential (username, [password], active, userId)
            VALUES('admin', 'password', 1,1)`;
                    var request = new sql_db.Request(conn);

                    request.query(query)
                        .then(data => {
                            response.json(data.recordset);
                            conn.close();
                        })
                        .catch(err => {
                            conn.close();
                            response.status(400).send('Error:' + err);
                        });
                })
                .catch(err => {
                    conn.close();
                    response.status(400).send('Error:' + err);
                });
        });

    return router;
};

module.exports = routes;