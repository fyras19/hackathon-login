# content of test_sample.py
import pytest
import json
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            yield client

def test_get_theme_cat_dict(client):
    response = client.get('/get_theme_cat_dict/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)
    assert all(isinstance(categories, list) for categories in data.values())

def test_get_theme(client):
    response = client.get('/get_theme/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)

def test_get_organizer(client):
    response = client.get('/get_organizer/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)

def test_get_hood(client):
    response = client.get('/get_hood/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)

def test_get_city(client):
    response = client.get('/get_city/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)

def test_all_events(client):
    response = client.get('/all_events')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)

def test_get_event_by_theme(client):
    response = client.get('/get_event_by_theme/Culture')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)

def test_get_event_by_city(client):
    response = client.get('/get_event_by_city/Nantes')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)

def test_get_filtered_events(client):
    response = client.post('/get_filtered_events/', json={'filters': {}, 'order_by': 'date', 'only_upcoming_events': True})
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)

def test_get_event_by_id(client):
    response = client.get('/get_event_by_id/57559_2024-02-04_15:00')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, dict)

def test_get_adresse_postale(client):
    response = client.get('/get_adresse_postale/?lon=0&lat=0')
    assert response.status_code == 400
    data = json.loads(response.data)
    assert "error" in data
