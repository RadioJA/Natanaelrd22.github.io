# Fixes for Saving Records Error

## Issue
Error when saving records: "Unexpected token '<', "<html>"... is not valid JSON"

## Root Cause
The PHP server was configured to serve only the `database` directory, but the frontend files are in the root directory. When fetch requests to PHP scripts failed, they returned HTML error pages instead of JSON.

## Changes Made
- [x] Updated `railway.json` to serve the entire project directory instead of just `database/`
- [x] Enhanced `database/db_connection.php` with better error handling and logging
- [x] Added JSON content-type headers to all PHP API files (`directores.php`, `moderadores.php`, `locutores.php`) to ensure they always return JSON

## Next Steps
- [x] Deploy the changes to Railway
- [x] Test the registration forms to ensure records can be saved successfully
- [x] Monitor debug.log for any remaining issues
- [x] Added JSON content-type header to locutores.php to ensure consistent JSON responses
