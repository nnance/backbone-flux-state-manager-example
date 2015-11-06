import { expect } from 'chai';
import {rooms, session} from '../../src/stores/room';

describe('Room Store', function() {
  let instance;

  before(function() {
    rooms.add([{
      id: 1,
      title: 'testing'
    },{
      id: 2,
      title: 'filtered'
    }]);
  });

  after(() => rooms.reset());

  describe('when initialized', function() {
    it('should have 2 items', function(){
      expect(rooms.length).to.equal(2);
    });
  });

  describe('When filtered with a valid filter', function() {
    var entries;

    before(() => entries = rooms.filteredByTitle('filt'));

    it('should return 1 item', function() {
      expect(entries.length).to.equal(1);
    });

    it('the remaining item should have a title of filtered', function() {
      expect(entries[0].title).to.equal('filtered');
    });
  });

  describe('When filtered with an empty filter', function() {
    var entries;

    before(() => entries = rooms.filteredByTitle(''));

    it('should return 2 items', function() {
      expect(entries.length).to.equal(2);
    });
  });
});
