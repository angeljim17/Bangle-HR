[
    {
        "id": "fca2d30daf79b6aa",
        "type": "tab",
        "label": "Dashboard",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "f8158c67332d9fae",
        "type": "mqtt in",
        "z": "fca2d30daf79b6aa",
        "name": "",
        "topic": "bangle/hrm",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "31a3134edde33281",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "a169047047ce5aa4"
            ]
        ]
    },
    {
        "id": "ba286d283c0def76",
        "type": "ui_gauge",
        "z": "fca2d30daf79b6aa",
        "name": "",
        "group": "10015f123a7536e7",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "HeartRate: Angel",
        "label": "bpm",
        "format": "{{value}}",
        "min": "50",
        "max": "160",
        "colors": [
            "#e6e600",
            "#07e704",
            "#f91a1a"
        ],
        "seg1": "70",
        "seg2": "120",
        "diff": false,
        "className": "",
        "x": 650,
        "y": 100,
        "wires": []
    },
    {
        "id": "a169047047ce5aa4",
        "type": "function",
        "z": "fca2d30daf79b6aa",
        "name": "function 2",
        "func": "let msgs = [];\nfor (const [id, hrm] of Object.entries(msg.payload)) {\n    msgs.push({ payload: hrm, topic: id });\n}\n\nlet salida1 = msgs.find(m => m.topic === \"bangle1\") || null;\nlet salida2 = msgs.find(m => m.topic === \"bangle2\") || null;\nlet salida3 = msgs.find(m => m.topic === \"bangle3\") || null;\n\nreturn [salida1, salida2, salida3];\n",
        "outputs": 3,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 140,
        "wires": [
            [
                "ba286d283c0def76",
                "3ace8e5477de9085"
            ],
            [
                "8a19f7255de48478",
                "250e7e41dd0a4a71"
            ],
            [
                "80119b467ea2c92a",
                "1bb37929ec80bbce"
            ]
        ]
    },
    {
        "id": "3ace8e5477de9085",
        "type": "function",
        "z": "fca2d30daf79b6aa",
        "name": "Alerta",
        "func": "let pressure = msg.payload.pressure || msg.payload; // Ajusta según cómo recibas el dato\n\nconst bajo = 50;\nconst alto = 130;\n\nif (pressure < bajo) {\n    msg.payload = \"<div style='font-size: 18pt'>OPERADOR 1, Pulso Muy Bajo</div>\";\n    return msg;\n}\n\nif (pressure > alto) {\n    msg.payload = \"<div style='font-size: 18pt'>OPERADOR 1, Pulso Muy Alto</div>\";\n    return msg;\n}\n\nreturn null; // No enviar nada si está en rango\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 40,
        "wires": [
            [
                "b00fbd50bd180314"
            ]
        ]
    },
    {
        "id": "b00fbd50bd180314",
        "type": "ui_toast",
        "z": "fca2d30daf79b6aa",
        "position": "top left",
        "displayTime": "30",
        "highlight": "red",
        "sendall": false,
        "outputs": 0,
        "ok": "OK",
        "cancel": "Cancel",
        "raw": true,
        "className": "",
        "topic": "Alerta",
        "name": "",
        "x": 790,
        "y": 40,
        "wires": []
    },
    {
        "id": "8a19f7255de48478",
        "type": "function",
        "z": "fca2d30daf79b6aa",
        "name": "Alerta",
        "func": "let pressure = msg.payload.pressure || msg.payload; // Ajusta según cómo recibas el dato\n\nconst bajo = 50;\nconst alto = 130;\n\nif (pressure < bajo) {\n    msg.payload = \"<div style='font-size: 18pt'>Daniel, Pulso Muy Bajo</div>\";\n    return msg;\n}\n\nif (pressure > alto) {\n    msg.payload = \"<div style='font-size: 18pt'>Daniel, Pulso Muy Alto</div>\";\n    return msg;\n}\n\nreturn null; // No enviar nada si está en rango\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 180,
        "wires": [
            [
                "954cc79e03447a0d"
            ]
        ]
    },
    {
        "id": "954cc79e03447a0d",
        "type": "ui_toast",
        "z": "fca2d30daf79b6aa",
        "position": "top left",
        "displayTime": "30",
        "highlight": "red",
        "sendall": false,
        "outputs": 0,
        "ok": "OK",
        "cancel": "Cancel",
        "raw": true,
        "className": "",
        "topic": "¡Alerta!",
        "name": "",
        "x": 790,
        "y": 180,
        "wires": []
    },
    {
        "id": "80119b467ea2c92a",
        "type": "function",
        "z": "fca2d30daf79b6aa",
        "name": "Alerta",
        "func": "let pressure = msg.payload.pressure || msg.payload; // Ajusta según cómo recibas el dato\n\nconst bajo = 50;\nconst alto = 130;\n\nif (pressure < bajo) {\n    msg.payload = \"<div style='font-size: 18pt'>Operador 3, Pulso Muy Bajo</div>\";\n    return msg;\n}\n\nif (pressure > alto) {\n    msg.payload = \"<div style='font-size: 18pt'>Operador 3, Pulso Muy Alto</div>\";\n    return msg;\n}\n\nreturn null; // No enviar nada si está en rango\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 320,
        "wires": [
            [
                "4f272611de5aae1d"
            ]
        ]
    },
    {
        "id": "4f272611de5aae1d",
        "type": "ui_toast",
        "z": "fca2d30daf79b6aa",
        "position": "top left",
        "displayTime": "30",
        "highlight": "red",
        "sendall": false,
        "outputs": 0,
        "ok": "OK",
        "cancel": "Cancel",
        "raw": true,
        "className": "",
        "topic": "¡Alerta!",
        "name": "",
        "x": 890,
        "y": 320,
        "wires": []
    },
    {
        "id": "250e7e41dd0a4a71",
        "type": "ui_gauge",
        "z": "fca2d30daf79b6aa",
        "name": "",
        "group": "10015f123a7536e7",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "HeartRate: Daniel",
        "label": "bpm",
        "format": "{{value}}",
        "min": "50",
        "max": "160",
        "colors": [
            "#e6e600",
            "#07e704",
            "#f91a1a"
        ],
        "seg1": "70",
        "seg2": "120",
        "diff": false,
        "className": "",
        "x": 650,
        "y": 260,
        "wires": []
    },
    {
        "id": "1bb37929ec80bbce",
        "type": "ui_gauge",
        "z": "fca2d30daf79b6aa",
        "name": "",
        "group": "10015f123a7536e7",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "HeartRate: Kitty",
        "label": "bpm",
        "format": "{{value}}",
        "min": "50",
        "max": "160",
        "colors": [
            "#e6e600",
            "#07e704",
            "#f91a1a"
        ],
        "seg1": "70",
        "seg2": "120",
        "diff": false,
        "className": "",
        "x": 640,
        "y": 380,
        "wires": []
    },
    {
        "id": "31a3134edde33281",
        "type": "mqtt-broker",
        "name": "",
        "broker": "test.mosquitto.org",
        "port": 1883,
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": 4,
        "keepalive": 60,
        "cleansession": true,
        "autoUnsubscribe": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthRetain": "false",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closeRetain": "false",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willRetain": "false",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    },
    {
        "id": "10015f123a7536e7",
        "type": "ui_group",
        "name": "Default",
        "tab": "bed73ad6328ea064",
        "order": 1,
        "disp": true,
        "width": 6,
        "collapse": false,
        "className": ""
    },
    {
        "id": "bed73ad6328ea064",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]