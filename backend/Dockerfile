FROM python:3.11.0-slim

WORKDIR /backend


COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD gunicorn --bind 0.0.0.0:5000 --log-level debug index:app

