function localtunnel {
  lt -s nvodbbduoajsdkpq --port 6000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
