#export
- mongodump -d <database_name> -o <directory_backup>
#import
- mongorestore -d <database_name> <directory_backup>
