import subprocess
import time

# Define the npm command to run
NPM_COMMAND = ["npm run start:today"]

def run_npm_command():
    try:
        print("[INFO] Running npm command...")
        result = subprocess.run(NPM_COMMAND, capture_output=True, text=True)
        print("[INFO] Command output:")
        print(result.stdout)  # Print standard output
        print("[INFO] Command errors (if any):")
        print(result.stderr)  # Print standard error
    except Exception as e:
        print(f"[ERROR] An exception occurred: {e}")

def main():
    print("[INFO] Starting the npm command scheduler...")
    while True:
        run_npm_command()
        print("[INFO] Waiting 20 seconds before the next run...")
        time.sleep(20)

if __name__ == "__main__":
    main()
