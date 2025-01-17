from pymongo import MongoClient
from bson.objectid import ObjectId
client = MongoClient()
db = client.Playlister
playlists = db.playlists
from flask import Flask, render_template,  request, redirect, url_for

app = Flask(__name__)



@app.route('/')
def playlists_index():
    """Show all playlists."""

        

    return render_template('playlists_index.html', playlists=playlists.find())

@app.route('/playlists/new')
def playlists_new():
    """Create a new playlist."""
    return render_template('playlists_new.html')


def video_url_creator(id_lst):
    videos = []

    for vid_id in id_lst:
        # We know that embedded YouTube videos always have this format
        video = 'https://youtube.com/embed/' + str(vid_id)
        print(video)
        videos.append(video)
    return videos


# Note the methods parameter that explicitly tells the route that this is a POST
@app.route('/playlists', methods=['POST'])
def playlists_submit():
    """Submit a new playlist."""
    # Grab the video IDs and make a list out of them
    video_ids = request.form.get('video_ids').split()
    # call our helper function to create the list of links
    videos = video_url_creator(video_ids)
    playlist = {
        'title': request.form.get('title'),
        'description': request.form.get('description'),
        'videos': videos,
        'video_ids': video_ids
    }
    playlists.insert_one(playlist)
    return redirect(url_for('playlists_index'))
    
@app.route('/playlists/<playlist_id>')
def playlists_show(playlist_id):
    """Show a single playlist."""
    playlist = playlists.find_one({'_id': ObjectId(playlist_id)})
    return render_template('playlists_show.html', playlist=playlist)

@app.route('/')
def playlists_edit(playlist_id):
    """Show render playlists_edit."""
    playlist = playlists.find_one({'_id': ObjectId(playlist_id)})
    return render_template('playlists_show.html', playlist=playlist)

if __name__ == '__main__':
    app.run(debug=True)


