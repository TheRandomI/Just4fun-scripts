// Define sleep function
function sleep(min, max) {
    let randomTime = Math.floor(Math.random() * max - min) + min;
    return new Promise(resolve => setTimeout(resolve, randomTime));
};

// Defines the style of the title
title_style = "text-shadow: 1px 1px 1px rgba(0,0,0,1.5); \
    background-image: radial-gradient(circle at center right, rgb(67,210,36),rgb(40,40,40)); \
    color: #4AF626; \
    padding-left: 4px; \
    font: Monospace;";

// Defines the style of all the logs
terminal_style = "color: #4AF626; font-family: Monospace;";

// Makes the body the same color as the console
document.head.innerHTML=document.head.innerHTML+"<style>body{background-color:282828;/style%3E%22;}";

// Does all the setup text (before the effects happen)
console.clear();
await sleep(15, 750); // If you want to coustomize the time delay, the first number is the minimum ms, and the second is the max ms
console.log("%c_  _ ____ ____ _  _ ____ ____    ____ _  _ \n\
|__| |__| |    |_/  |___ |__/    |___  \\/  \n\
|  | |  | |___ | \\_ |___ |  \\    |    _/\\_ ", title_style);
await sleep(15, 750);
console.log("%cHello, welcome to Hacker FX Terminal by TheRandomI!", terminal_style);
await sleep(15, 750);
console.log("%cPlease choose a Effect mode:\n1) Quit\n2) Fake script\n3) Fake Logs\n4) Matrix", terminal_style);
mode = prompt("What Effect mode would you like?");

// Makes sure the user dosen't try to input a fake mode
while (isNaN(mode) || mode <= 0 || mode > 4) {
  mode = parseInt(prompt("Enter a valid mode you idiot."));
};

// Quit mode
if (mode == 1) {
    console.log("%cSucessfully quit HackerFX", terminal_style);
};

// Fake Script mode
if (mode == 2) {
    fake_script = [ "if(typeof govMainframe != 'undefined' && govMainframe.active) {", " govMainframe.byPassSecureProtocol();", "}", "", "function executeBruteForce(target, payload) {", " if(target.isSecure && target.failedAttempts < 5) {", " let attempts = 0;", " while(attempts < 50) {", " attempts++;", " target.sendPayload(payload);", " if(target.isAuthenticated) {", " break;", " }", " if(attempts >= 50) {", " console.warn('[*] Brute force attempt failed.');", " }", " }", " }", "}", "", "const financialDB = {", " 'bank_of_national_security': {", " 'data': 'encrypted',", " 'firewall': 'high',", " 'status': 'active'", " }", "};", "", "function bypassFinancialFirewall(bank) {", " if (bank.status === 'active') {", " let bypassStatus = Math.random() > 0.6 ? 'success' : 'failure';", " if (bypassStatus === 'success') {", " bank.data = 'decrypted';", " } else {", " console.warn('[*] Firewall breach failed.');", " }", " }", "}", "", "bypassFinancialFirewall(financialDB.bank_of_national_security);", "", "let classifiedData = ['nuclear_codes', 'military_plans', 'economic_strategies'];", "let exfiltrationSuccess = false;", "", "function exfiltrateData(data) {", " data.forEach(item => {", " let exfiltrationStatus = Math.random() > 0.5 ? 'complete' : 'in-progress';", " if (exfiltrationStatus === 'complete') {", " console.log(`[+] Exfiltrated: ${item}`);", " } else {", " console.log(`[+] Exfiltration of ${item}: in-progress...`);", " }", " });", " exfiltrationSuccess = true;", " console.log('[*] Exfiltration complete. Data sent to remote server.');", "}", "", "exfiltrateData(classifiedData);", "", "function deployRootkit(targetSystem) {", " let rootkitStatus = Math.random() > 0.5 ? 'activated' : 'failed';", " if (rootkitStatus === 'activated') {", " targetSystem.accessLevel = 'full';", " } else {", " console.warn('[*] Rootkit deployment failed.');", " }", "}", "", "deployRootkit(govMainframe);", "", "function eraseLogs(system) {", " if(system.hasLogs) {", " let logStatus = Math.random() > 0.7 ? 'erased' : 'failed';", " if(logStatus === 'erased') {", " system.logs = 'cleared';", " } else {", " console.warn('[*] Log file deletion failed.');", " }", " }", "}", "", "eraseLogs(govMainframe);", "", "function hackFederalDatabase(targetDatabase) {", " let intrusionStatus = Math.random() > 0.5 ? 'success' : 'failure';", " if (intrusionStatus === 'success') {", " targetDatabase.dataAccess = 'granted';", " } else {", " console.warn('[*] Federal database hack failed.');", " }", "}", "", "let federalDB = {", " 'usa_fed_db': {", " 'status': 'secure',", " 'dataAccess': 'denied'", " }", "};", "", "hackFederalDatabase(federalDB.usa_fed_db);", "", "function dnsSpoof(targetDNS) {", " let spoofingSuccess = Math.random() > 0.6;", " if(spoofingSuccess) {", " targetDNS.redirect('192.168.100.1');", " } else {", " console.warn('[*] DNS spoofing failed.');", " }", "}", "", "let targetDNS = {", " 'gov_domain': {", " 'host': 'gov.secure.domain',", " 'redirect': function(newIP) {", " console.log('[+] Redirecting to: ' + newIP);", " }", " }", "};", "", "dnsSpoof(targetDNS.gov_domain);", "", "function disableMonitoringTools() {", " let tools = ['IDS', 'Firewall', 'Logger'];", " tools.forEach(tool => {", " let status = Math.random() > 0.7 ? 'disabled' : 'failed';", " if(status === 'disabled') {", " console.log(`[+] ${tool} disabled.`);", " } else {", " console.warn(`[*] Failed to disable ${tool}.`);", " }", " });", "}", "", "disableMonitoringTools();", "", "function sendDataToRemoteServer(data) {", " let sendStatus = Math.random() > 0.5 ? 'sent' : 'delayed';", " if (sendStatus === 'sent') {", " console.log('[+] Data successfully sent to remote server.');", " } else {", " console.warn('[*] Data transfer delayed.');", " }", "}", "", "sendDataToRemoteServer(classifiedData);" ]; // This is the fake script you see, each element in the array is a line in the script. Change to be whatever you want
    i = 0;
    console.clear();
    
    // Prints the fake script in the console.
    while (true) {
        console.log("%c" + fake_script[i], terminal_style);
        await sleep(0, 150);
        i++;
        if (i > fake_script.length) {
        i = 0;
        };
    };
};

// Fake Logs mode
if (mode == 3) {
    fakeLogs = [ "Initializing access... ██████████████ 100%", "Bypassing national security protocol... ████████ 80%", "Loading GOV-TF Z6 Encryption Key... ████████ 45%", "Decrypting target files... ████████████████ 98%", "Performing root access infiltration... ████ 60%", "[INFO] Hacking government mainframe (gov_net_v4)...", "[INFO] Breaching firewall (level 8)...", "[INFO] Spoofing DNS servers...", "[INFO] Exploiting vulnerability in GOS-7 API...", "[WARNING] System breach detected by A.I. anomaly watchdog.", "[INFO] Redirecting logs to secured remote server...", "[INFO] Injection complete, accessing classified files...", "[INFO] Target documents: National Defense Assets, Executive Branch Policies", "[DEBUG] Injecting payload into GOS-7 protocol...", "[DEBUG] Bypassing multi-factor authentication...", "[ERROR] Authentication failed. Retrying bypass...", "[INFO] Bypass successful. Proceeding with main data extraction...", "[INFO] Deploying anonymous proxy botnet on global servers...", "[INFO] Cracking root password for encrypted file storage...", "[DEBUG] Accessing classified data vaults...", "[INFO] Copying entire database: National Security Protocol v7", "[INFO] Transferring 40TB of data...", "[INFO] Download complete. Encrypting exfiltrated data...", "[INFO] Ensuring safe exit, wiping traces...", "[INFO] Terminating root access...", "[INFO] All tasks completed. Remote access closed.", "[INFO] Launching self-destruct protocol on terminal...", "[INFO] Operation “GovVaultExfil” completed successfully.", "Shutting down system...", "[INFO] Securely exiting... ███████████ 100%", "[INFO] Activating system lockdown... ██████████ 85%", "[DEBUG] Initializing secondary exploitation vector...", "[INFO] Bypassing advanced firewall bypass protocols...", "[ERROR] Unauthorized access attempt detected. Retrying attack vector...", "[INFO] Retrieving access credentials for admin rights...", "[INFO] Critical data breach in progress... ███████ 70%", "[INFO] Deploying multi-layered proxy server for data concealment...", "[INFO] Cracking secondary encryption layer...", "[WARNING] Potential detection imminent. Activating decoy...", "[INFO] Exploit successful. Escalating privileges...", "[DEBUG] Extracting encrypted government documents...", "[INFO] Copying secure files... ███████████ 90%", "[INFO] Starting data exfiltration through covert channel...", "[INFO] Redirecting server traffic to concealed endpoint...", "[DEBUG] Confirming data integrity... ██████████ 99%", "[INFO] Data exfiltration complete. Deleting local copies...", "[INFO] Launching system reset to cover tracks...", "[INFO] Securely disconnecting from compromised server...", "[INFO] Performing system cleanup... ██████ 50%", "[INFO] Exploiting DNS spoofing vulnerability...", "[ERROR] DNS redirection failed. Retrying attack method...", "[INFO] System restored to previous state. No evidence found.", "[INFO] Data packet encryption complete. Transmitting to server...", "[INFO] Remote access session closed. Data integrity intact.", "[INFO] Creating backdoor access... ███████ 65%", "[INFO] Overriding system monitoring tools...", "[INFO] Disabling external traffic surveillance...", "[INFO] Masking data logs from detection algorithms...", "[INFO] Hacking federal database... █████████ 45%", "[DEBUG] Bypassing multi-level encryption layers...", "[INFO] Activating proxy chain for network traffic...", "[INFO] Data breach successful. Transmitting data to remote server...", "[INFO] Completing server hijacking sequence...", "[INFO] Data packet successfully exfiltrated to cloud storage...", "[INFO] Ensuring safe exit from compromised server...", "[INFO] Shutdown initiated to cover traces of breach...", "[INFO] Deployment of fake credentials successful...", "[INFO] Cracking password hash using brute force...", "[INFO] Initiating payload injection into target server...", "[INFO] Target system status: Compromised.", "[INFO] Bypassing system's firewall and proxy layers...", "[INFO] Finalizing data extraction process...", "[INFO] File integrity check: Passed.", "[INFO] Hacking into classified government network...", "[INFO] Deploying malicious script into target mainframe...", "[INFO] Bypassing security token authentication...", "[INFO] Secure data packet transfer complete...", "[INFO] Encrypting exfiltrated data for transmission...", "[INFO] Remote access shutdown complete.", "[INFO] Operation complete. Self-destructing system logs...", "[INFO] Data securely stored on remote server...", "[INFO] Maintaining root access for future sessions...", "[INFO] Breaching secondary government network...", "[INFO] Encrypting and transferring sensitive files...", "[INFO] Creating anonymous network traffic...", "[INFO] Initiating self-cleanup process...", "[INFO] Final data encryption complete.", "[INFO] All backdoors closed. System secure.", "[INFO] Task complete. Leaving no trace.", "[INFO] Terminal shutdown initiated.", "[INFO] Operation “DarkWebExfil” executed flawlessly.", "[INFO] Deleting user session data...", "[INFO] Ensuring no traces of activity remain...", "[INFO] Secure shutdown of remote connection...", "[INFO] Closing terminal connection to server...", "[INFO] Connection terminated. Operation complete.", "[INFO] Remote server shutdown... ██████ 80%", "[INFO] Operation “GovRoot” completed. Data exfiltrated successfully.", "[INFO] System cleaned, no evidence detected.", "[INFO] Self-destruct initiated on terminal logs..." ]; // This is the fake logs you see, each element in the array is a logs. Change to be whatever you want
    i = 0;
    console.clear();
    
    // Prints the fake lgos in the console.
    while (true) {
        console.log("%c" + fakeLogs[i], terminal_style);
        await sleep(150, 1250);
        i++;
        if (i > fakeLogs.length) {
        i = 0;
        };
    };
};

// Matrix mode
if (mode == 4) {
    // Tell the user to make sure their console is properly sized
    console.clear();
    console.log("%c!!PLEASE MAKE SURE YOUR CONSOLE IS PROPERLY SIZED!!", terminal_style);
    console.log("%c<-- Drag the console as far left as you can", terminal_style);
    console.log("%cPress ctrl+ and ctrl- until this message takes up the entire width of the console. ----------------------------------------------------------------------------------------------------------------------------------------------", terminal_style);
    await sleep(7500, 7500);
    window.alert("Press OK to continue.");
    console.clear();

    // Needed variables
    characters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '', '=', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
    previous_line = '                                                                                                                                                                                                                                         ';
    matrix_style = 'font-family: monospace; font-size: 10.5px; color: #4AF626';

    // Function to mutate the matrix every line
    function mutate() {
        previous_line = previous_line.split('');
        
        for (var i = 0; i < previous_line.length; i++) {
            current = previous_line[i];

            if (current != ' ' && Math.random() < 0.1) {
                previous_line[i] = ' ';
            } else if (current == ' ' && Math.random() < 0.01) {
                previous_line[i] = characters[Math.floor(Math.random() * characters.length)]
            } else if (current != ' ') {
                previous_line[i] = characters[Math.floor(Math.random() * characters.length)];
            }
        }

        previous_line = previous_line.join('');

        if (previous_line.length < 233) { 
            while (previous_line.length != 233) {
            previous_line += ' '
            }
        }
    }

    // Start the matrix
    while (true) {
        mutate();
        console.log("%c" + previous_line, matrix_style);
        await sleep(10, 20)
    }
}

