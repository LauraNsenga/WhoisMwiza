from openai import OpenAI
from context import MWIZA_INFO_PROMPT
from tools import tools, handle_tool_calls
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv(override=True)

MODEL_NAME = "gpt-5.4-mini"

openai = OpenAI()
system = [{"role": "system", "content": MWIZA_INFO_PROMPT}]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_methods=["*"],
    allow_headers=["*"],
)


def chat(message, history):
    messages = system + history + [{"role": "user", "content": message}]
    response = openai.chat.completions.create(
        model=MODEL_NAME, messages=messages, tools=tools)
    while response.choices[0].finish_reason == "tool_calls":
        message = response.choices[0].message
        tool_calls = message.tool_calls
        results = handle_tool_calls(tool_calls)
        messages.append(message)
        messages.extend(results)
        response = openai.chat.completions.create(
            model=MODEL_NAME, messages=messages, tools=tools)
    return response.choices[0].message.content


class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []


@app.post("/chat")
def chat_endpoint(req: ChatRequest):
    reply = chat(req.message, req.history)
    return {"reply": reply}
